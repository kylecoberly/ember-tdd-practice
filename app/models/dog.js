import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr(),
    breed: DS.attr(),
    avatarUrl: DS.attr()
});
