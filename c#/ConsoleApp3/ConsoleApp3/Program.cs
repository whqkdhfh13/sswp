using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Threading;


namespace ConsoleApp3 {
    class Program {
        readonly static private string[] sName = new string[] { "Allister", "Jane", "Justin", "Jayden", "Annyung"};
        readonly static private string[] sVerb = new string[] { "licks", "kicks", "absorb the power from", "runs", "eats" };
        readonly static private string[] sObject = new string[] { "Apple", "Microsoft", "school", "the god", "the monitor" };
        static Random rnd = new Random();

        private static string[] MakeInsults(string[] sN, string[] sV, string[] sO, int howMany) {
            string[] result = new string[howMany];

            for (int i = 0; i < howMany; i++) {
                result[i] = String.Format("{0} {1} {2}.",sN[rnd.Next(4)], sV[rnd.Next(4)], sO[rnd.Next(4)]);
            }

            return result;

        }

        private static void SaveInsults(string inputFileName, string[] inputArray, bool putLine) {
            string fileName;

            if (!inputFileName.Contains(".txt"))
                fileName = inputFileName + ".txt";
            else
                fileName = inputFileName;

            StreamWriter sw = new StreamWriter(fileName); 

            for(int i = 0; i < inputArray.Length; i++) {
                sw.WriteLine((i+1) + ". " + inputArray[i]);
            }
            sw.Close();

            Console.WriteLine(System.AppDomain.CurrentDomain.BaseDirectory + fileName);
        }

        private static void SaveInsults (string inputFileName, string[] inputArray) {
            string fileName;
            string currentPath = System.AppDomain.CurrentDomain.BaseDirectory;

            if (!inputFileName.Contains(".txt"))
                fileName = inputFileName + ".txt";
            else
                fileName = inputFileName;

            StreamWriter sw = new StreamWriter(fileName);

            foreach (string sTemp in inputArray) {
                sw.WriteLine(sTemp);
            }
            sw.Close();

            Console.WriteLine("\n" + currentPath + fileName);
            string executeCmd = "/C \"" + System.AppDomain.CurrentDomain.BaseDirectory + fileName + "\"\nexit";
            System.Diagnostics.Process.Start("CMD.exe", executeCmd);
        }

        private static void ICA27(ref bool toMain) {
            string[] aTemp = MakeInsults(sName, sVerb, sObject, 1);

            while (true) {
                Console.Write("!! Insult Generator !!\n\nPlease submit the number of insults that you want to make.\nIf you want to proceed to the main menu, please press Enter: ");
                try {
                    uint sNum = uint.Parse(Console.ReadLine());
                    aTemp = MakeInsults(sName, sVerb, sObject, (int)sNum);
                    break;
                }
                catch (System.FormatException) {
                    toMain = true;
                    break;
                }
                catch (System.OverflowException e) { // Both catch occurs when string is typed. Need to be fixed.
                    toMain = false;
                    Console.Clear();
                    Console.WriteLine("Wrong input. Please try again with the natural number.\n\n" + e + "\n");
                }

            }

            if (toMain) return;


            Console.WriteLine("\n// List of insults\n");
            for (int i = 0; i < aTemp.Length; i++) {
                Console.WriteLine((i + 1) + ". " + aTemp[i]);
            }

            while (true) {
                try {
                    Console.WriteLine("\nIf you want to save this in a new file, please type the name of the file. \nIf you want to proceed to the main menu, please press Enter:");
                    string sTemp = Console.ReadLine();

                    if (sTemp.Length > 0)
                        SaveInsults(sTemp, aTemp);

                    toMain = true;
                    break;
                }                
                catch (System.OverflowException e) {
                    Console.WriteLine("Wrong File Name. Please avoid any special characters.\n\n" + e.InnerException + "\n");
                }
            }
        }

        static void Main (string[] args) {

            bool backToMain;

            while (true) {
                backToMain = false;
                try {
                    Console.Write("Enter - Exit the program\n1 - Insult Generator\n\nPlease select the program that you want to execute: ");
                    int temp = int.Parse(Console.ReadLine());

                    Console.Clear();

                    if (temp == 0) {
                        break;
                    } else if (temp == 1) {
                        ICA27(ref backToMain);
                        if (!backToMain)
                            break;
                        else
                            Console.Clear();
                    } else {
                        Console.Clear();
                        Console.WriteLine("Wrong input. Please try again within the range of the selections.\n");
                    }
                } catch (Exception) {
                    break;
                }
            }
        }
    }
}
