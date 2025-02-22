import { FunctionComponent } from 'react';
import { ILabelProps } from './LabelComponent.types';
import {
  HelperMessage,
  LabelHelperMessageWrapper,
  LabelWrapper,
} from './styles';

export const Label: FunctionComponent<ILabelProps> = ({
  helperMessage,
}) => {
  return (
    <LabelWrapper>
      <LabelHelperMessageWrapper>
        {helperMessage && <HelperMessage>{helperMessage}</HelperMessage>}
      </LabelHelperMessageWrapper>
    </LabelWrapper>
  );
};
