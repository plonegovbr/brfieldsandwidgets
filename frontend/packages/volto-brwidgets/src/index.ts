import type { ConfigType } from '@plone/registry';
import installWidgets from './config/widgets';

function applyConfig(config: ConfigType) {
  installWidgets(config);

  return config;
}

export default applyConfig;
