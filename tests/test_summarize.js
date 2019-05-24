var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
var fonctions = require("../fonctions/fonctions");


describe("Tests fonction summarize", function () {
    describe("Test 2 fonction summarize", function () {
        it("Insert", function () {
            
            let textTest1 = "You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. And we have no money for surgeries. She can't take it. I just wanna see her smile again. I just want her to know that I don't care about the scars. So, I do this to myself. And you know what? She can't stand the sight of me. She leaves. Now I see the funny side. Now I'm always smiling."

            let ResultTextTest1 = fonctions.summarize(textTest1);
	
		assert(ResultTextTest1 = "You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile mo...");
        });
    });


    describe("Test 2 fonction summarize", function () {
            it("Insert", function () {

                let textTest2 = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";

                let ResultTextTest2 = fonctions.summarize(textTest2);

    		assert(ResultTextTest2 = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete accou...");
            });
        });
});