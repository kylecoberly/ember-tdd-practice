import { test } from "qunit";
import moduleForAcceptance from "ember-testing/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance: Users should be able to see a list of dogs", {
});

test("You can visit /dogs", function(assert) {
    server.createList("dog", 3);
    visit("/dogs");

    andThen(function(){
        assert.equal(currentURL(), "/dogs", "URL matches");
        assert.equal(find("ul.dogs li").length, 3, "3 dogs show up");
    });
});
