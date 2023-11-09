// Types for compiled templates
declare module '@add/two/templates/*' {
    import { TemplateFactory } from 'ember-cli-htmlbars';

    const tmpl: TemplateFactory;
    export default tmpl;
}
