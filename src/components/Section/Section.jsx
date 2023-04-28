import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export const Section = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
