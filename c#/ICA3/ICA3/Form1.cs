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
        static Color cCurrent;
        static Color fill;
        static Color stroke;
        static int size = 10;
        Point mClick;

        public Form1 () {
            InitializeComponent();
            Run();
            
        }

        static void abc() {
            b.AddEllipse(150, 150, 100, 100, Color.FromArgb(255, 255, 0), 1, Color.FromArgb(0, 255, 255));
            b.AddEllipse(100, 100, 100, 100, Color.FromArgb(100, 255, 255, 0), 1, Color.FromArgb(0, 255, 255));
        }

        private void button1_Click (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(0, 0, 0, 0);
            b = new CDrawer(800, 800);
            abc();
            toolStripStatusLabel1.Text = "Initiated..";
            toolStripStatusLabel2.Text = String.Format("Current Color: ({0}, {1}, {2}, {3})", trackBar2.Value, trackBar3.Value, trackBar4.Value, trackBar1.Value);
        }

        private void Run() {
            while (true) {
                if (b.GetLastMouseLeftClick(out mClick)) {
                    b.AddEllipse(mClick.X, mClick.Y, size, size, fill, 1, stroke);
                }
            }
        }

        private void radioButton1_CheckedChanged (object sender, EventArgs e) {
            fill = cCurrent;
        }

        private void radioButton2_CheckedChanged (object sender, EventArgs e) {
            stroke = cCurrent;
        }

        private void trackBar1_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
        }

        private void trackBar2_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
        }

        private void trackBar3_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
        }

        private void trackBar4_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
        }
    }
}
