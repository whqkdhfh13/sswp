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
        private int iCount;

        public Form1 () {
            InitializeComponent();
        }

        private void button1_Click (object sender, EventArgs e) {
            textBox1.Text = "Try to guess the secret number from 1 to 100 in 6 tries to win. Press [New Game] to start.";
            textBox2.Enabled = true;
            this.ActiveControl = textBox2;
            button1.Enabled = false;
            Random rnd = new Random();
            iGoal = rnd.Next(101);
            iCount = 6;
            label1.Text = iGoal.ToString();
        }

        private void button2_Click (object sender, EventArgs e) {
            try {
                int tInput = int.Parse(textBox2.Text);

                if (tInput > 100 || tInput < 0)
                    throw new System.ArgumentOutOfRangeException();

                if (tInput == iGoal) {
                    EndGame("Congraturations! You have successfully guessed the secret number in " + (7 - iCount) +" tries. Please press [New Game] button to start a new game.");
                    return;
                }

                iCount--;

                if (iCount == 0) {
                    EndGame("Unfortunately, you have failed to guess the secret number. Please press [New Game] button to start a new game.");
                    return;
                }

                string sTemp;
                if (tInput > iGoal) {
                    sTemp = "high";
                } else {
                    sTemp = "low";
                }

                textBox1.Text = string.Format("{0} is too {1}!\r\n\r\n\r\nChance(s) remaining: {2}", tInput, sTemp, iCount);

                textBox2.Text = "";

                this.ActiveControl = textBox2;

            } catch (Exception) {
                MessageBox.Show("Wrong input! Please Try again.\nThis game only requires positive integer number less or equal to 100 to play.", "Error while processing given input");
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

        private void textBox2_KeyDown (object sender, KeyEventArgs e) {            
            if (e.KeyCode == Keys.Return) {
                button2.PerformClick();               
            }

        }

        private void textBox2_TextChanged (object sender, EventArgs e) {
            if (textBox2.TextLength == 0)
                button2.Enabled = false;
            else
                button2.Enabled = true;
        }


        // Plan - StartGame(), ProcessGame() !! Will try to use recursion




    }
}
