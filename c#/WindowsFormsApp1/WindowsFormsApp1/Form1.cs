using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1: Form
    {


        private int m_i = 0;
        public Form1 () {
            InitializeComponent();
        }

        private void Form1_Load (object sender, EventArgs e) {
            MessageBox.Show("m_i has been initialised.", "Load Handler");
        }

        private void Form1_Shown (object sender, EventArgs e) {
            MessageBox.Show("Shown says, \"Hello, World!\"");

        }

        private void Form1_Paint (object sender, PaintEventArgs e) {
            System.Diagnostics.Trace.WriteLine(m_i++.ToString() + "| Hey! it hurtss");
        }

        private void Form1_MouseMove (object sender, MouseEventArgs e) {
            Text = "Mouse Coordinates | " + e.X + ", " + e.Y;
        }

        private void Form1_MouseDown (object sender, MouseEventArgs e) {
            // Used MouseDown instead of MouseClick, since I don't like the delay and I want it to display where the mouse is clicked, not when mouse is released
            100.Times(() => System.Diagnostics.Trace.WriteLine(string.Format("Mouse clicked at coordinates {0}, {1}.", e.X, e.Y)));
        }

        private void button1_Click (object sender, EventArgs e) {
            button1.Text = "Thanks!";
            if (textBox1.Text.Trim().Length != 0) 
                MessageBox.Show(textBox1.Text);            
        }

        private void textBox1_KeyDown (object sender, KeyEventArgs e) {
            // Commented out since I want multiline textbox and enter key can be used to change the line
            //if (e.KeyData == Keys.Enter)
            //    MessageBox.Show(textBox1.Text);
        }

        private void Form1_FormClosing (object sender, FormClosingEventArgs e) {
            if (MessageBox.Show("Do you really want to exit?", "Are you sure?",
                MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.No)
                e.Cancel = true;
            
        }

        private void button1_MouseLeave (object sender, EventArgs e) {
            if (button1.Text.Equals("Thanks!")) {
                button1.Text = "Try me again!";
            }
        }
    }
}
