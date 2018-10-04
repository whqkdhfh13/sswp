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

        private static void ICA28(ref bool toMain) {
            string sFileToOpen;
            string sFileToCopy;
            Console.WriteLine("!! Double Doubler !!\n\nPlease press Enter at anytime to proceed to the main menu.");

            Console.Write("Please enter name of the file to open: ");

            sFileToOpen = Console.ReadLine();

            if (sFileToOpen.Length == 0)
                return;

            if (!sFileToOpen.Contains(".txt"))
                sFileToOpen += ".txt";

            if (!File.Exists(sFileToOpen)) {
                Console.WriteLine("\nNew file with the name {0} has been created, since there is no such file named {0}.", sFileToOpen);
                StreamWriter swTemp = new StreamWriter(sFileToOpen);
                Random rnd = new Random();
                while (true) {
                    Console.Write("Please enter the number of doubles you want to generate:");
                    try {
                        int iTemp = int.Parse(Console.ReadLine());                        
                        for (int i = 0; i < iTemp; i++) {
                            swTemp.WriteLine(rnd.NextDouble());
                        }
                        swTemp.Close();
                        Console.WriteLine("\n{0} random doubles have been generated.");
                    } catch (Exception) {
                        Console.WriteLine("\nWrong input. Make sure to type only a natural number.");
                    }
                }
            }

            //StreamReader sr = new StreamReader(sFileToOpen);

            //while (true) {

            //}
        }

        private static void ICA27(ref bool toMain) {
            string[] aTemp = MakeInsults(sName, sVerb, sObject, 1);            

            while (true) {
                string sTemp;
                Console.Write("!! Insult Generator !!\n\nPlease submit the number of insults that you want to make.\nIf you want to proceed to the main menu, please press Enter: ");
                sTemp = Console.ReadLine();
                try {                    
                    uint sNum = uint.Parse(sTemp);
                    aTemp = MakeInsults(sName, sVerb, sObject, (int)sNum);
                    break;
                }
                catch (System.FormatException) {
                    if (sTemp.Length == 0) {
                        toMain = true;
                        break;
                    } else {
                        Console.Clear();
                        Console.WriteLine("Wrong input. Please try again with the natural number.\n");
                    }
                }         
            }

            if (toMain) return;

            Console.WriteLine("\n// List of insults\n");
            for (int i = 0; i < aTemp.Length; i++) Console.WriteLine((i + 1) + ". " + aTemp[i]);
            

            while (true) {
                try {
                    Console.WriteLine("\nIf you want to save this in a new file, please type the name of the file. \nIf you want to proceed to the main menu, please press Enter:");
                    string sTemp = Console.ReadLine();

                    if (sTemp.Length > 0) SaveInsults(sTemp, aTemp);

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
                    Console.Write("Enter - Exit the program\n" +
                        "1 - Insult Generator\n" +
                        "2 - Double Doubler\n" +
                        "\nPlease select the program that you want to execute: ");
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
                    } else if (temp == 2) {

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
