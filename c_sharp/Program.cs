using System;

namespace My_stuff_2
{
    class Program
    {
        static void Main(string[] args)
        {   //the stuff up here is for before the game starts
            Console.Title = "collect a sword simulator";

            //below this is the code for the game
            Console.WriteLine("What would you like to be called?");
            String Name = Console.ReadLine();
            Console.WriteLine(Name + " is a beautiful name.\nSay, what pronouns do you use?(he/she/they)");
            String Pronoun = Console.ReadLine();
            if (Pronoun == "he")
            {
                Console.WriteLine("Ooh, a heroic man");
            }
            else if (Pronoun == "she")
            {
                Console.WriteLine("Of course, everyone loves a powerful Heroine");
            }
            else if (Pronoun == "they")
            {
                Console.WriteLine("A genderfluid protagonist, how unique!");
            }

            Console.WriteLine("Anyways, " + Name + " was just chilling in a castle when " + Pronoun + " was transported to the middle of a grassy field.");

            String Hasplayerlooked = "0";
            while (Hasplayerlooked != "1")
            {
                Console.WriteLine("what do you do?");
                Console.WriteLine("1: open inventory 2: Look around");
                string choice = Console.ReadLine();
                if (choice == "1")
                {
                    String[] inventory = { "Nothing", "Nothing", "Nothing", "Nothing"};
                    for (int i = 0; i < 4; i++)
                    {
                        Console.WriteLine(inventory[i]);
                    }
                }
                else if (choice == "2")
                {
                    Console.WriteLine("You look around and see a sword,\none that is just the right size for you");
                    break;
                }
                else
                {
                    Console.WriteLine("that wasn't one of the options " + Name);
                }
            }

            while (Hasplayerlooked != "1")
            {
                Console.WriteLine("what do you do?");
                Console.WriteLine("1: open inventory 2: Look around 3: take sword");
                string choice = Console.ReadLine();
                if (choice == "1")
                {
                    String[] inventory = { "Nothing", "Nothing", "Nothing", "Nothing" };

                    for (int i = 0; i < 4; i++)
                    {
                        Console.WriteLine(inventory[i]);
                    }
                }
                else if (choice == "2")
                {
                    Console.WriteLine("You look around and see a sword,\none that is just the right size for you");
                }
                else if (choice == "3")
                {
                    Console.WriteLine("You took the sword");
                    String[] inventory = { "Sword", "Nothing", "Nothing", "Nothing" };
                    break;
                }
                else
                {
                    Console.WriteLine("that wasn't one of the options " + Name);
                }
            }

            while (Hasplayerlooked != "1")
            {
                Console.WriteLine("what do you do?");
                Console.WriteLine("1: open inventory 2: There is no second option because i'm too lazy to code that :p");
                string choice = Console.ReadLine();
                if (choice == "1")
                {
                    String[] inventory = { "Sword", "Nothing", "Nothing", "Nothing" };

                    for (int i = 0; i < 4; i++)
                    {
                        Console.WriteLine(inventory[i]);
                    }
                }
            }

        }
    }

    }