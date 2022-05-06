import {test} from '@japa/runner'


test.group("JsonBank", (group) => {

    test('Get Js-sdk-test file', async ({ client}) => {
        // Create Request
        const request = client.get('file/js-sdk-test/index.json')

        // Add your headers
        request.header('jsb-pub-key', 'pub_IIdCTS7d5RQDuElFq0meQ9rvZtMC582V0xF8kCqVF47wF7sUHsBOAcRG')

        // Send request
        const res = await request.send()

        // Log response body
        console.log("Body:", res.body())

        // Assert response status and body content
        res.assertStatus(200);
        res.assertBodyContains({
            author: "jsonbank",
        })
    })
});