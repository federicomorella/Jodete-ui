import { useEffect,useState} from 'react';
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3001/cable')

export default function useCable(){
    const [sub, setSub] = useState()
    const [message, setMessage] = useState('');
    useEffect(()=>{
        let sub=CableApp.cable.subscriptions.create(
            'GameChannel'
            ,
            // Called when the subscription is ready for use on the server.
            {
                // Called once when the subscription is created.
                initialized() {
                    this.update = this.update.bind(this)
                    console.log('GameChannel: Initialized')
                },
                connected() {
                    this.install()
                    this.update()
                    console.log('GameChannel: Connected')
                },

                // Called when the WebSocket connection is closed.
                disconnected() {
                    this.uninstall()
                    console.log('GameChannel: Disconnected')
                },

                // Called when the subscription is rejected by the server.
                rejected() {
                    this.uninstall()
                    console.log('GameChannel: Rejected')
                },

                update() {
                    this.perform("speak",{message:"pp"+Math.random()})
                },

                appear() {
                    // Calls `AppearanceChannel#appear(data)` on the server.
                    this.perform("appear", { appearing_on: this.appearingOn })
                },

                away() {
                    // Calls `AppearanceChannel#away` on the server.
                    this.perform("away")
                },
                install() {
                    // window.addEventListener("focus", this.update)
                    // window.addEventListener("blur", this.update)
                    // document.addEventListener("turbo:load", this.update)
                    // document.addEventListener("visibilitychange", this.update)
                  },
                
                uninstall() {
                // window.removeEventListener("focus", this.update)
                // window.removeEventListener("blur", this.update)
                // document.removeEventListener("turbo:load", this.update)
                // document.removeEventListener("visibilitychange", this.update)
                }
            }
        )
        
        setSub(sub);
    },
    []
    );   



    return sub

}
