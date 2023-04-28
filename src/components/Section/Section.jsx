import PropTypes from 'prop-types';
import { Section } from './Section.styled';

export const Section = ({ children }) => <Section>{children}</Section>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
