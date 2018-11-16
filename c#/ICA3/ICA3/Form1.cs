using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using GDIDrawer;

namespace ICA3
{
    public partial class Form1: Form
    {
        static CDrawer b;

        public Form1 () {
            InitializeComponent();
            
        }

        static void abc() {
            b.AddEllipse(150, 150, 100, 100, Color.FromArgb(255, 255, 0), 1, Color.FromArgb(0, 255, 255));
            b.AddEllipse(100, 100, 100, 100, Color.FromArgb(100, 255, 255, 0), 1, Color.FromArgb(0, 255, 255));
        }

        private void button1_Click (object sender, EventArgs e) {
            b = new CDrawer(800, 800);
            abc();
            toolStripStatusLabel1.Text = "Initiated..";
            toolStripStatusLabel2.Text = String.Format("Current Color: ({0}, {1}, {2}, {3})", trackBar2.Value, trackBar3.Value, trackBar4.Value, trackBar1.Value);
        }
    }
}

// Add Border and Size. d
