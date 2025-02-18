import CreatePagePlugin from "@magnolia/cli-create-page-plugin"
import CreateComponentPlugin from "@magnolia/cli-create-component-plugin"
import CreateVirtualUriPlugin from '@magnolia/cli-create-virtual-uri-plugin';
import CreateContentTypePlugin from '@magnolia/cli-create-content-type-plugin';
import CreateAppPlugin from '@magnolia/cli-create-app-plugin';
import CreateLightModulePlugin from '@magnolia/cli-create-light-module-plugin';
import StartPlugin from '@magnolia/cli-start-plugin';
export default {
  analytics: {
    enabled: true,
    // Set to false to turn off analytics
    uuid: '7211e024-ac77-48da-8117-0eb5ffb3d54a',
  },
  plugins: [
    new CreatePagePlugin({
        framework:'@magnolia/cli-freemarker-prototypes',prototype:'basic'
    }),
    new CreateComponentPlugin({
        framework:'@magnolia/cli-freemarker-prototypes',prototype:'basic'
    }),
    new CreateVirtualUriPlugin(),
    new CreateContentTypePlugin(),
    new CreateAppPlugin(),
    new CreateLightModulePlugin(),
    new StartPlugin({
      tomcatPath: './apache-tomcat',
    }),
  ],
  logger: {
    filename: './mgnl.error.log',
    fileLevel: 'warn',
    consoleLevel: 'debug',
  },
};
