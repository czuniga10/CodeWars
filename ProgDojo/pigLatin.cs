using System;
using System.Linq;

namespace PigLatin
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(otayIgpayAtinlay("awesome child happy"));

        }

        private static string otayIgpayAtinlay(string str)
        {
            var sb = new System.Text.StringBuilder();
            var foo = str.Split(" ");
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
                _ = i != foo.Length ? sb.Append(" ") : sb.Append(".");
            }
            return sb.ToString();
        }

        private static bool VowelCheck(char i)
        {
            i = Char.ToLower(i);
            char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
            if (vowels.Contains(i))
            {
                return true;
            }
            return false;
        }
    }
}
