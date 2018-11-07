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
        private int iCount = 0;

        public Form1 () {
            InitializeComponent();
        }

        private void button1_Click (object sender, EventArgs e) {
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
                    // EndGame
                    textBox1.Text = "Congraturations! You have successfully guessed the secret number. Please press [New Game] button to start a new game.";
                } else if (tInput > iGoal) {
                    // too high
                } else {
                    // too low
                }
                iCount++;
            } catch (Exception) {

            }
            
        }

        // Plan - StartGame(), ProcessGame() !! Will try to use recursion




    }
}
