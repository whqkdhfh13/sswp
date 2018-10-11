using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Threading;
/*
 * while (true) {
       try {
           Console.Write("\nPlease type the number of insults that you want to generate: ");
           howMany = uint.Parse(Console.ReadLine());
           break;
       }
       catch (Exception) {
           Console.WriteLine("Wrong input. Pleases try again.");
       }
    }   
 */
namespace ConsoleApp3 {
    class Program {
        readonly static private string[] sName = new string[] { "Allister", "Jane", "Justin", "Jayden", "Annyung"};
        readonly static private string[] sVerb = new string[] { "licks", "kicks", "absorb the power from", "runs", "eats" };
        readonly static private string[] sObject = new string[] { "Apple", "Microsoft", "school", "the god", "the monitor" };
        static Random rnd = new Random();

        private static string[] MakeInsults(string[] sN, string[] sV, string[] sO, uint howMany) {
            string[] result = new string[howMany];

            for (int i = 0; i < howMany; i++) {
                result[i] = String.Format("{0} {1} {2}.",sN[rnd.Next(sN.Length)], sV[rnd.Next(sV.Length)], sO[rnd.Next(sO.Length)]);
            }

            return result;

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

        private static string[] GenerateInsults () {
            string[] saName, saVerb, saObject;
            uint howMany;
            while (true) {
                try {
                    Console.Write("\nPlease type the number of names you want to enter: ");
                    saName = new string[uint.Parse(Console.ReadLine())];
                    Console.WriteLine();
                    for (int i = 0; i < saName.Length; i++) {
                        while (true) {
                            Console.Write("Please enter name #{0}: ", i + 1);
                            saName[i] = Console.ReadLine();
                            if (saName[i].Trim().Length < 1)
                                Console.WriteLine("Wrong input. Pleases try again.");
                            else
                                break;
                        }
                    }
                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Wrong input. Pleases try again.");
                }
            }

            while (true) {
                try {
                    Console.Write("\nPlease type the number of verbs you want to enter: ");
                    saVerb = new string[uint.Parse(Console.ReadLine())];
                    Console.WriteLine();
                    for (int i = 0; i < saVerb.Length; i++) {
                        while (true) {
                            Console.Write("Please enter verb #{0}: ", i + 1);
                            saVerb[i] = Console.ReadLine();
                            if (saVerb[i].Trim().Length < 1)
                                Console.WriteLine("Wrong input. Pleases try again.");
                            else
                                break;
                        }
                    }
                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Wrong input. Pleases try again.");
                }
            }

            while (true) {
                try {
                    Console.Write("\nPlease type the number of objects you want to enter: ");
                    saObject = new string[uint.Parse(Console.ReadLine())];
                    Console.WriteLine();
                    for (int i = 0; i < saObject.Length; i++) {
                        while (true) {
                            Console.Write("Please enter object #{0}: ", i + 1);
                            saObject[i] = Console.ReadLine();
                            if (saObject[i].Trim().Length < 1)
                                Console.WriteLine("Wrong input. Pleases try again.");
                            else
                                break;
                        }
                    }
                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Wrong input. Pleases try again.");
                }
            }

            while (true) {
                try {
                    Console.Write("\nPlease type the number of insults that you want to generate: ");
                    howMany = uint.Parse(Console.ReadLine());
                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Wrong input. Pleases try again.");
                }
            }

            return MakeInsults(saName, saVerb, saObject, howMany);
        }

        private static void ICA27(ref bool toMain) {
            string[] aTemp = MakeInsults(sName, sVerb, sObject, 1);            

            while (true) {
                string sTemp;
                Console.Write("!!-Insult Generator-!!\n\nPlease submit the number of insults that you want to make.\nIf you want to proceed to the main menu, please press Enter: ");
                sTemp = Console.ReadLine();
                try {                    
                    uint sNum = uint.Parse(sTemp);
                    aTemp = MakeInsults(sName, sVerb, sObject, sNum);
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

        private static void ICA28 (ref bool toMain) {
            string sFileToOpen;
            string sFileToCopy;
            StreamWriter swTemp;
            StreamReader sr;
            StreamWriter sw;

            Console.WriteLine("!!-Double Doubler-!!\n\nPlease press Enter at anytime to proceed to the main menu.");
            Console.Write("Please enter the name of file to create or read from: ");
            sFileToOpen = Console.ReadLine();

            if (sFileToOpen.Length == 0)
                return;

            if (!sFileToOpen.Contains(".txt"))
                sFileToOpen += ".txt";

            if (!File.Exists(sFileToOpen)) {
                while (true) {
                    try {
                        swTemp = new StreamWriter(sFileToOpen);
                        Console.WriteLine("\nNew file with the name {0} has been created, since there is no such file named {0}.", sFileToOpen);
                        break;
                    }
                    catch (Exception) {
                        Console.WriteLine("Failed to create a new file with the given name - \"{0}\". Please try again with a different name", sFileToOpen);
                    }
                }
                Random rnd = new Random();

                while (true) {
                    Console.Write("Please enter the number of doubles you want to generate: ");
                    try {
                        int iTemp = int.Parse(Console.ReadLine());
                        for (int i = 0; i < iTemp; i++) {
                            swTemp.WriteLine(rnd.NextDouble() * 100);
                        }
                        swTemp.Close();
                        Console.WriteLine("\n{0} random doubles have been generated successfully.\n", iTemp);
                        break;
                    }
                    catch (Exception) {
                        Console.WriteLine("\nWrong input. Make sure to type only a natural number.\n");
                    }
                }
            }

            sr = new StreamReader(sFileToOpen);

            while (true) {
                try {
                    Console.Write("Please enter the name of file to create where the doubled doubles will be stored: ");
                    sFileToCopy = Console.ReadLine();

                    if (sFileToCopy.Length == 0)
                        return;

                    if (!sFileToCopy.Contains(".txt")) {
                        sFileToCopy += ".txt";
                    }

                    sw = new StreamWriter(sFileToCopy);

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("\nWrong input. Please try again with a different name.\n");
                }
            }

            Console.WriteLine("\n// Transition Log\n");

            while (sr.Peek() != -1) {
                double dTemp = double.Parse(sr.ReadLine());
                Console.WriteLine("{0} --- X2 ---> {1}", dTemp, 2 * dTemp);
                sw.WriteLine(2 * dTemp);
            }
            sr.Close();
            sw.Close();

            Console.WriteLine("\nSuccessfully doubled doubles. Press any key to proceed to main menu...");
            Console.ReadKey();
        }

        private static void ICA29(ref bool toMain, out string[] mainSaTemp) {
            Console.Clear();
            Console.WriteLine("!!-Advanced Insult Management Tool-!!");
            mainSaTemp = GenerateInsults();
            foreach(string temp in mainSaTemp) {
                Console.WriteLine(temp);
            }
            Console.ReadKey();
            toMain = true;
        }    

        static void Main (string[] args) {

            bool backToMain;

            while (true) {
                backToMain = false;
                try {
                    Console.Write("Enter - Exit the program\n" +
                        "1 - ICA 27\n" +
                        "2 - ICA 28\n" +
                        "3 - ICA 29\n" +
                        "\nPlease select from one of the options: ");
                    int temp = int.Parse(Console.ReadLine());

                    Console.Clear();

                    if (temp == 0) {
                        break;
                    } else if (temp == 1) {
                        ICA27(ref backToMain);
                    } else if (temp == 2) {
                        ICA28(ref backToMain);
                    } else if (temp == 3) {
                        string[] saTemp;
                        while (true) {
                            ICA29(ref backToMain, out saTemp);
                            if (!backToMain)
                                break;
                        }
                    } else {
                        Console.Clear();
                        Console.WriteLine("Wrong input. Please try again within the range of the selections.\n");
                    }
                } catch (Exception e) {
                    Console.WriteLine("Exception occured. Please fix it :\n" + e);
                }
                if (!backToMain)
                    break;
                Console.Clear();
            }
        }
    }
}
