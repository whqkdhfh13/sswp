using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp2
{
    public partial class Form1: Form
    {
        private int iGoal;
        private int iCount = 6;

        public Form1 () {
            InitializeComponent();
        }

        private void button1_Click (object sender, EventArgs e) {
            textBox1.Text = "Try to guess the secret number from 1 to 100 in 6 tries to win. Press [New Game] to start.";
            textBox2.Enabled = true;
            this.ActiveControl = textBox2;
            button1.Enabled = false;
            button2.Enabled = true;
            Random rnd = new Random();
            iGoal = rnd.Next(101);
        }

        private void button2_Click (object sender, EventArgs e) {
            try {
                int tInput = int.Parse(textBox2.Text);

                if (tInput == iGoal) {
                    EndGame("Congraturations! You have successfully guessed the secret number. Please press [New Game] button to start a new game.");
                } else if (tInput > iGoal) {
                    // ERROR
                    textBox1.Value = tInput + "is too high!" + "\r\n" + "Changes Remaining: " + iCount.ToString();
                        // string.Format("{0} is too high!\nChance(s) remaining: {1}", tInput, iCount);
                } else {
                    textBox1.Text = string.Format("{0} is too low!\nChance(s) remaining: {1}", tInput, iCount);
                }
                iCount--;

                if (iCount == 0) {
                    EndGame("Unfortunately, you have failed to guess the secret number. Please press [New Game] button to start a new game.");
                }
            } catch (Exception) {
                MessageBox.Show("Wrong input! Please Try again\nThis game only requires positive integer number to play.", "Error while processing given input");
            }
            
        }

        private void EndGame(string endText) {
            textBox1.Text = endText;
            textBox2.Text = "";
            textBox2.Enabled = false;
            this.ActiveControl = button1;
            button1.Enabled = true;
            button2.Enabled = false;
        }
        // Plan - StartGame(), ProcessGame() !! Will try to use recursion




    }
}
