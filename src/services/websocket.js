import { useEffect,useState} from 'react';
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

export default function useCable(){
    const [message, setMessage] = useState('');
    useEffect(()=>{
        CableApp.cable.subscriptions.create(
            {
                channel: 'ChatsChannel',
            },
            {
                received: (data) => {
                console.log(`Recibi ${data}`)
                setMessage(message);
                }
            }
        )
    },
    []
    );   

}
