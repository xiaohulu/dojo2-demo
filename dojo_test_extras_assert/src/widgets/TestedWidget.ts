import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/widget-core/mixins/Themed';

import * as css from './styles/TestedWidget.m.css';

const ThemedBase = ThemedMixin(WidgetBase);

export interface TestedWidgetProperties extends ThemedProperties {

}

@theme(css)
export default class TestedWidget extends ThemedBase<TestedWidgetProperties>{

    protected render(){
        return v('div', {classes: this.theme(css.root), style:'height:120px'}, ['Test Widget']);
    }
    
}