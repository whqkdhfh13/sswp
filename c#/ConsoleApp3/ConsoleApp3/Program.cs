using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleApp3 {
    class Program {
        readonly static private string[] sName = new string[] { "Allister", "Jane", "Justin", "Jayden", "Annyung"};
        readonly static private string[] sVerb = new string[] { "licks", "kicks", "absorb the power from", "runs", "eats" };
        readonly static private string[] sObject = new string[] { "Apple", "Microsoft", "school", "the god", "the monitor" };
        static Random rnd = new Random();

        private static string[] makeInsults(string[] sN, string[] sV, string[] sO, int howMany) {
            string[] result = new string[howMany];

            for (int i = 0; i < howMany; i++) {
                result[i] = String.Format("{0} {1} {2}.",sN[rnd.Next(4)], sV[rnd.Next(4)], sO[rnd.Next(4)]);
            }

            return result;

        }

        static void Main (string[] args) {
            string[] temp = makeInsults(sName, sVerb, sObject, 10);

            foreach (string sTemp in temp) {
                Console.WriteLine(sTemp);
            }
            Console.ReadLine();

        }
    }
}
