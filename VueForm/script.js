Vue.component('custom-form', {
    template: '#custom-form',
    props:['fields','url','action'],
    methods: {
    	sendForm: function(e){
    		e.preventDefault();
    		console.log(this.url);
    		var dict = [];

    		for (var key in this.fields){
    			dict.push({
    				key: this.fields[key].id,
    				value: this.fields[key].value
    			});
    			//console.log(dict);
    		}
    		axios.get(this.url+"/?action=data&data=" + JSON.stringify(dict))
    			.then(
    				function(response){
    					console.log(response.data);
    				});
    	}
    }
})

var app = new Vue({
    el: '.container',
    data: {
        fields: [{
        		tag: "input",
                type: 'text',
                placeholder: 'Username',
                id: 'usernameInp',
                class: "inputText",
            },
            {
        		tag: "input",
                type: 'text',
                placeholder: 'e-mail',
                id: 'e-mailInp',
                class: "inputText",
            },
            {
                tag: "input",
                type: 'password',
                placeholder: 'Password',
                id: 'passInp',
                class: "inputText",
            },
            /*{
            	tag: 'button',
                id: 'btnInp',
                class: 'btn',
                text: 'press me!'
            },*/
            {
            	tag: 'textarea',
            	placeholder: 'Your message here...',
            	id: 'messageInp',
            	class: 'inputTextArea',
            	value: ''
            },
            {
        		tag: "button",
                type: 'submit',
                id: 'usernameInp',
                value: "Submit",
                text: 'Submit'
            }
        ]
    },
    methods: {
    	sendForm
    }
})

function sendForm(fields)
{
	console.log(fields);
}
