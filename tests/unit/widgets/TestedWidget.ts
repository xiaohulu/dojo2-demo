const { registerSuite } = intern.getInterface('object');

import harness from "@dojo/test-extras/harness";
import TestedWidget from '../../../src/widgets/TestedWidget';

import * as css from '../../../src/widgets/styles/TestedWidget.m.css';
import { v } from '@dojo/widget-core/d';

registerSuite('TestedWidget', {

    tests: {
        'harness test'() {
            let widget = harness(TestedWidget);
            widget.expectRender(v('div', {
                classes: css.root,
                style: 'height: 120px;'
            },['Test Widget']))
        }
    }

});

