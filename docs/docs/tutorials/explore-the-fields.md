---
myst:
  html_meta:
    "description": "Run this repository's development site, add a demo content item, and watch every Brazilian field format and validate its value."
    "property=og:description": "Run this repository's development site, add a demo content item, and watch every Brazilian field format and validate its value."
    "property=og:title": "Explore the fields on a development site"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, tutorial, CPF, CNPJ, CEP"
---

(tutorial-explore-the-fields)=

# Explore the fields on a development site

In this tutorial, you'll run this repository's development site, and fill in a content item that uses every field the packages provide.
By the end, you will have seen each widget format a value as you type it, and Plone refuse a value that is not valid.

## Before you start

You need [uv](https://docs.astral.sh/uv/), Node.js 24, [pnpm](https://pnpm.io/), Git, and `make`.

## Get the code

Clone the repository, and change into it.

```shell
git clone https://github.com/plonegovbr/brfieldsandwidgets.git
cd brfieldsandwidgets
```

## Install both packages

Install the backend and the frontend.

```shell
make install
```

This takes a few minutes.
It also creates a site named `Plone`, with the demo profile applied, so the site already holds an example item.

## Start the backend

Start Plone.

```shell
make backend-start
```

Leave it running.
You should see a line ending with `Serving on http://127.0.0.1:8080`.

## Start the frontend

In a second terminal, from the same folder, start Volto.

```shell
make frontend-start
```

When the build finishes, open `http://localhost:3000` in your browser.
Notice the **Exemplo** item in the navigation.

## Look at the example

Open **Exemplo**.
Each value is shown formatted: the CNPJ as `00.000.000/0001-91`, and the CEP as `01330-001`.
The values are stored as digits only; the view widgets add the punctuation.

## Add an item

Log in with the username `admin` and the password `admin`.
Then choose {menuselection}`Add --> DemoContent`.

Type `Empresa` as the title.

## Type a CNPJ

Select the **CNPJ** field, and type `11222333000181`.
Notice that the widget writes `11.222.333/0001-81` as you type.

## Type a CPF that is not valid

Select the **CPF** field, and type `37731335450`.
Its last digit is wrong.

Choose a state in the **Endereço** tab, type the CEP `70609370`, and fill in both phone numbers in the **Contato** tab with `61994340171`.

Select {guilabel}`Save`.
The form is not saved, and the **CPF** field shows an error.

## Fix the CPF

Change the last digit of the CPF to `3`, so the field holds `377.313.354-53`.
Select {guilabel}`Save` again.

The item is saved, and its view shows every value formatted.

## What you did

You ran the development site, and saw the widgets format each value while you typed it.
You also saw Plone refuse a CPF whose check digits are wrong.

To use the fields in your own content types, read {doc}`/how-to-guides/add-fields-to-a-content-type`.
