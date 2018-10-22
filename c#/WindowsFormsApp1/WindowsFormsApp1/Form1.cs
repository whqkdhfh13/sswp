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
            System.Diagnostics.Trace.WriteLine(m_i++.ToString() + "| Waaaaaaaaaaaaaaaaaaaa");
        }
    }
}
