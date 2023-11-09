// Types for compiled templates
declare module 'app-one/templates/*' {
    import { TemplateFactory } from 'ember-cli-htmlbars';

    const tmpl: TemplateFactory;
    export default tmpl;
}
