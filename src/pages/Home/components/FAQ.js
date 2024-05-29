import Accordion from "./Accordion";
function FAQ(){
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        }
    ];
    return(
        <>
            <div className="border border-gray-200 p-4">
                <div className="w-full my-6 text-center">
                    <h2 className="text-xl font-bold tracking-tight underline text-gray-900 sm:text-2xl dark:text-gray-200">Questions in mind</h2>
                </div>
                <div className="px-2">                    
                    <dl className="text-gray-900 dark:text-white">
                        {faqs.map((item,key) => (
                            <Accordion key={key} item={item}/>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
}

export default FAQ;