import React from 'react';
import { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } from 'App';

const { array } = React.PropTypes;


/*
 * The Glossary of Terms component.
 *
 * @param {Object} props - The React props object.
 *
 * @since 1.0.0
 */

const Glossary = (props) => {
  if (props.terms.length === 0) {
    return null;
  }

  const glossary = props.terms.map((term) => {
    return(
      <CollapseItem key={ term.id }>
        <CollapseTrigger tag={ 'p' }>{ term.title }</CollapseTrigger>
        <CollapsePanel description={ term.description } />
      </CollapseItem>
    );
  });
  
  return (
    <div>
      <h3>Glossary of Terms</h3>
      <Collapse>
        { glossary }
      </Collapse>
    </div>
  );
}


Glossary.propTypes = {
  terms: array
}


export default Glossary;

