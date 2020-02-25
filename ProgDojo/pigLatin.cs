using System;
using System.IO;
using System.Linq;

namespace PigLatin
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(ToPigLatin("test"));
            Console.WriteLine(ToPigLatin("awesome"));
            Console.WriteLine(ToPigLatin("child"));
            Console.WriteLine(ToPigLatin("happy"));
            Console.WriteLine(ToPigLatin("awesome child happy."));
            Console.WriteLine();

            var input = "";
            while(input != "q")
            {
                Console.Write("Write a word or sentence to convert to Pig Latin (type q to quit): ");
                input = Console.ReadLine();
                Console.WriteLine(ToPigLatin(input));
                Console.WriteLine();
            }
        }

        public static string ToPigLatin(string str)
        {
            var sb = new System.Text.StringBuilder();
            var hasPeriod = false;
            if (str.Equals("q"))
                return "";
            if (str[str.Length - 1] == '.')
            {
                hasPeriod = true;
                str = str.Substring(0, str.Length - 1);
            }
            
            var foo = str.Split(" ");
            var len = foo.Length;

            for (var i = 0; i < foo.Length; i++)
            {
                if (!VowelCheck(foo[i][0]) && VowelCheck(foo[i][1]))
                {
                    sb.Append(foo[i].Substring(1) + foo[i][0].ToString() + "ay");
                }
                else if (!VowelCheck(foo[i][0]) && !VowelCheck(foo[i][1]))
                {
                    sb.Append(foo[i].Substring(2) + foo[i][0].ToString() + foo[i][1].ToString() + "ay");
                }
                else
                {
                    sb.Append(foo[i]+"way");
                }
                if(hasPeriod)
                    _ = i != len-1 ? sb.Append(" ") : sb.Append(".");
            }
            return sb.ToString();
        }

        private static bool VowelCheck(char i)
        {
            i = Char.ToLower(i);
            char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
            if (vowels.Contains(i))
                return true;
            return false;
        }
    }
}
