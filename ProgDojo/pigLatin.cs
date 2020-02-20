using System;
namespace pigLatin.cs
{
    public class MyClass
    {
        public MyClass()
        {
            Console.WriteLine(otayIgpayAtinlay("happy"));
        }

        public string otayIgpayAtinlay(string str)
        {
            var sb = new StringBuilder();
            var foo = str.Split(" ");
            for (var i = 0; i < foo.Length; i++)
            {
                if (!vowelCheck(foo[i]) && vowelCheck(foo[i+1]))
                {
                    sb.append(foo.substring(1,foo.Length)+foo[i]+"ay");
                }
            }
        }

        public bool vowelCheck(char i)
        {
            i = i.toLowerCase();
            var vowels = new char[] { 'a', 'e', 'i', 'o', 'u' };
            if (!vowels.Contains(i))
            {
                return true;
            }
            return false;
        }
    }
}