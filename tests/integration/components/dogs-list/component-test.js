import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

var container = this.container;
var store = container.lookup('service:store') || container.lookup('store:main');

moduleForComponent("dogs-list", "Integration | Component | dogs list", {
    integration: true
});

test("it should have a header identifying it as a list of dogs", function(assert){
    this.render(hbs`{{dogs-list}}`);

    assert.equal(this.$("h2").text(), "Dogs");
});

test("it should show a list of dogs", function(assert){
    var Dog = function(id){
        this.id = id;
        this.type = "dog";
    };

    var dogs;
    Ember.run(()=>{
        dogs = store.push({data: [
            new Dog(1),
            new Dog(2),
            new Dog(3)
        ]});
    });
    this.set("dogs", dogs);

    this.render(hbs`{{dogs-list dogs=dogs}}`);
    assert.equal(this.$("ul.dogs li").length, 3, "3 dogs show up");
});
