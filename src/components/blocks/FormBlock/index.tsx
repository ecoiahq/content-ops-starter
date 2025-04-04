import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
  const formRef = React.createRef<HTMLFormElement>();
  const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

  if (fields.length === 0) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(formRef.current);
    const value = Object.fromEntries(data.entries());
    alert(`Form data: ${JSON.stringify(value)}`);
  }

  return (
    <div
      className={classNames(
        'sb-component',
        'sb-component-block',
        'sb-component-form-block',
        className,
        styles?.self?.margin && mapStyles({ margin: styles.self.margin }),
        styles?.self?.padding && mapStyles({ padding: styles.self.padding }),
        styles?.self?.borderWidth &&
          styles?.self?.borderWidth !== 0 &&
          styles?.self?.borderStyle !== 'none' &&
          mapStyles({
            borderWidth: styles.self.borderWidth,
            borderStyle: styles.self.borderStyle,
            borderColor: styles.self.borderColor ?? 'border-primary'
          }),
        styles?.self?.borderRadius && mapStyles({ borderRadius: styles.self.borderRadius })
      )}
    >
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id={elementId}
        onSubmit={handleSubmit}
        ref={formRef}
        data-sb-field-path={fieldPath}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div
          className={classNames(
            'w-full',
            'flex',
            'flex-wrap',
            'gap-8',
            mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' })
          )}
          {...(fieldPath && { 'data-sb-field-path': '.fields' })}
        >
          {fields.map((field, index) => {
            const modelName = field.__metadata.modelName;
            if (!modelName) {
              throw new Error(`form field does not have the 'modelName' property`);
            }
            const FormControl = getComponent(modelName);
            if (!FormControl) {
              throw new Error(`no component matching the form field model name: ${modelName}`);
            }
            return (
              <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />
            );
          })}
        </div>

        {submitButton && (
          <div
            className={classNames(
              'mt-8',
              'flex',
              mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' })
            )}
          >
            <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
          </div>
        )}
      </form>
    </div>
  );
}

