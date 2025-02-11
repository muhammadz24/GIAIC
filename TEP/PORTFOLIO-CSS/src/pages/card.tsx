const Card = () => {
    let message: string = "My first arrow function with components";
    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export const Card2 = () => {
    let message: string = "My second arrow function with components";
    return (
        <div>
            <h4>{message}</h4>
        </div>
    );
};

export default Card;  
