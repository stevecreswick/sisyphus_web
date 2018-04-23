import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Resource from '../Resource'

class ResourceList extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    resources: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired
  }

  render() {
    const { component, resources, actions } = this.props;
    console.log(resources);
    
    return (
      <section className="resources">
        <ul className="resource-list">
          {resources.map(resource =>
            <Resource 
              key={resource.id} 
              component={component} 
              resource={resource}
              actions={actions}/>
          )}
        </ul>

        {/* <RockForm onSubmit={actions.addRock} /> */}
      </section>
    )
  }
}

module.exports = ResourceList