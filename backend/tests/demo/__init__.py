"""Tests for the demo profile and its content type."""

DEMO_PROFILE = "plonegovbr.brfields:demo"
PORTAL_TYPE = "DemoContent"

#: A DemoContent payload where every field is valid.
PAYLOAD = {
    "type": PORTAL_TYPE,
    "id": "empresa",
    "title": "Empresa",
    "description": "Uma empresa de exemplo",
    "cnpj": "11222333000181",
    "cpf": "37731335453",
    "estado": "DF",
    "cep": "70609370",
    "telefone": "6133011285",
    "fax": "61994340171",
}

#: The same payload, as the REST API expects it.
RESTAPI_PAYLOAD = {
    "@type": PORTAL_TYPE,
    **{k: v for k, v in PAYLOAD.items() if k != "type"},
}
