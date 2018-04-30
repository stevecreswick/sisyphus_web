
import * as R from 'rambda'

export class Resource {
  constructor( resource, options = {}) {
    this.name = resource.name;
    this.id = resource.id;
    this.children = options.associations || [];
  }
}

export class Parser {
  constructor( response ) {
    this.payload = response.payload;
    this.associations = response.associations;
    this.data = this.createResources( response.data );
  }

  createResources( resources ) {
    return resources.map( ( resource ) => {
      return new Resource(resource, this.buildOptions( resource, resources ) )
    });
  }

  buildOptions(resource, resources) {
    const options = {};
    options['associations'] = this.resourceAssociations(resource, resources);
    return options;
  }

  resourceAssociations( resource, resources ) {
    if ( this.parents().indexOf( resource.id ) !== -1 ) {
      return this.findChildren(resources, resource.id);
    }
  }
  
  parents() {
   return this.associations.map( ( resource ) => {
      return resource.id
    } )
  }

  findChildren(resources, id) {
    return resources.filter((resource) => {
      return resource.parent_id === id
    })
  }
}