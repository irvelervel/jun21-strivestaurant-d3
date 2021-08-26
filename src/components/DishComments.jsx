// because this component doesn't need a state
// we're gonna create it as a function

const DishComments = ({ dish }) => (
    // conditional rendering with a ternary operator
    dish ? (
        <ul>
            {
                // the list is listening to the state in order to know when to refresh!
                dish.comments.map(c => (
                    <li key={c.id}>{c.comment}</li>
                ))

                // dish?.comments.map(c => (
                //     <li key={c.id}>{c.comment}</li>
                // ))
                // that question mark is called OPTIONAL CHAINING
                // it will check the truthiness of dish before trying to access its comments property

            }
        </ul>
    ) : (
        <div>no dish selected</div>
    )
)

export default DishComments