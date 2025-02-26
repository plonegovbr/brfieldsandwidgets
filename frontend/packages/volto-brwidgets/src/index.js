import { registerWidgets } from './config/widgets';

const applyConfig = (config) => {
  // Register Widgets
  registerWidgets(config);
  return config;
};

export default applyConfig;
