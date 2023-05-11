import './ExpenseItem.css';

function ExpenseItem(props) {
    // console.log(title)
    // console.log(title)
    const expenseDate = new Date(2023, 5, 10);
    const expenseTitle = 'Car Priceeeeeeee';
    const expenseAmount = 20.000;

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
        
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div>{makeid(5)}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rp. {props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;