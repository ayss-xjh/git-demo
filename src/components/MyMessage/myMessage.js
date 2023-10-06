import Vue from 'vue'
import myMessage from './myMessage.vue'

let myMessageComponent = Vue.extend(myMessage)
let instances = []

function open(options = {}) {
    let instance = new myMessageComponent({
        el: document.createElement('div'),
        data() {
            return{
                ...options
            }
        }
    })
    instance.visible = true


    document.body.appendChild(instance.$el)

    let messageTop = 30

    instances.forEach((item) => {
        messageTop += item.$el.offsetHeight + 10
    })
    instance.top = messageTop
    instances.push(instance)



    return instance
}

export default {
    open: (options = {}) => open(options)
}