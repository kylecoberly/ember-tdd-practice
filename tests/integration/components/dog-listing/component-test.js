import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

var container = this.container;
var store = container.lookup('service:store') || container.lookup('store:main');

moduleForComponent("dog-listing", "Integration | Component | dog listing", {
    integration: true
});

test("It should show the dog's details", function(assert){
    var dog;

    Ember.run(()=>{
        dog = store.push({data: {
            id: 1,
            type: "dog",
            attrs: {
                name: "Bixby",
                breed: "Chow Chow",
                avatarUrl: "http://animaliaz-life.com/data_images/chow-chow/chow-chow5.jpg"
            }
        }});
    });
    this.set("dog", dog);
    this.render(hbs`{{dog-listing dog=dog}}`);
    assert.equal(this.$(".avatar").attr("src"), "http://animaliaz-life.com/data_images/chow-chow/chow-chow5.jpg", "Show avatar");
    assert.equal(this.$(".name").text(), "Bixby", "Shows name");
    assert.equal(this.$(".breed").text(), "Chow Chow", "Shows breed");
});
