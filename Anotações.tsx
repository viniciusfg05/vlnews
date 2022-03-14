Para criar um evento para ouvir o "created, updated, deleted".
Vamos add mais 3 case;
    `
    case "custmer.subscription.created":
    case "custmer.subscription.updated":
    case "custmer.subscription.deleted":

        const subscription = event.data.object as Stripe.Subscription; //entidade 
        await saveSubscription(
            subscription.id,
            subscription.customer.toString(),
        )
    `

No Sripe para atulizar a subscription tem dois metodos o updated e replace.
updated: conseguimos pega um capo especifico para atualizarmos.
replace: Atulizar o subscription inteiro.

Vamos precisar criar um indexes para conseguir procurar um subscription pelo id
Source Collection: Subscriptions,
Index Name: subscription_by_id,
Terms: data.id
