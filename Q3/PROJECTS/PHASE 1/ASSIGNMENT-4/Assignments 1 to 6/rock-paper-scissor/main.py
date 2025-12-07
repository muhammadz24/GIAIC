import random

print("Welcome to the Rock, Paper, Scissors game!")

choices = ["rock", "paper", "scissor"]
user_score = computer_score = 0
print("Lets play!")

while True:
    user_input = input("Enter rock, paper, or scissor (or 'exit' to quit): ").lower()
    if user_input == 'q':
        print(f'Final Score - you: {user_score}, computer: {computer_score}')
        print("Thanks for playing!")
        break
    if user_input not in choices:
        print("Invalid input. Please try again.")
        continue
    computer_choose = random.choice(choices)
    print(f"Computer chose: {computer_choose}")
    if user_input == computer_choose:
        print("It's a tie!")
    elif (user_input == "rock" and computer_choose == "scissor") or \
         (user_input == "paper" and computer_choose == "rock") or \
         (user_input == "scissor" and computer_choose == "paper"):
        print("You win!")
        user_score += 1
    else:
        print("Computer wins!")
        computer_score += 1

    print(f"Current Score - you: {user_score}, computer: {computer_score}")
        
   




