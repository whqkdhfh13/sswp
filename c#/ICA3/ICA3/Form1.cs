using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
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
        Point mClick = new Point();

        public Form1 () {
            InitializeComponent();
            fill = Color.FromArgb(255, 255, 255, 255);
            stroke = Color.FromArgb(255, 255, 255, 255);
        }

        static void abc() {
            b.AddEllipse(150, 150, 100, 100, Color.FromArgb(255, 255, 0), 1, Color.FromArgb(0, 255, 255));
            b.AddEllipse(100, 100, 100, 100, Color.FromArgb(100, 255, 255, 0), 1, Color.FromArgb(0, 255, 255));
        }

        private void button1_Click (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(0, 0, 0, 0);
            b = new CDrawer(800, 800);
            timer1.Enabled = true;
            abc();
            toolStripStatusLabel1.Text = "Initiated..";
            
        }        

        private void trackBar1_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
            toolStripStatusLabel2.Text = String.Format("Current Color: (R:{0}, G:{1}, B:{2}, A:{3})", trackBar1.Value, trackBar2.Value, trackBar3.Value, trackBar4.Value);
        }

        private void trackBar2_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
            toolStripStatusLabel2.Text = String.Format("Current Color: (R:{0}, G:{1}, B:{2}, A:{3})", trackBar1.Value, trackBar2.Value, trackBar3.Value, trackBar4.Value);
        }

        private void trackBar3_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
            toolStripStatusLabel2.Text = String.Format("Current Color: (R:{0}, G:{1}, B:{2}, A:{3})", trackBar1.Value, trackBar2.Value, trackBar3.Value, trackBar4.Value);
        }

        private void trackBar4_ValueChanged (object sender, EventArgs e) {
            cCurrent = Color.FromArgb(trackBar4.Value, trackBar1.Value, trackBar2.Value, trackBar3.Value);
            toolStripStatusLabel2.Text = String.Format("Current Color: (R:{0}, G:{1}, B:{2}, A:{3})", trackBar1.Value, trackBar2.Value, trackBar3.Value, trackBar4.Value);
        }

        private void timer1_Tick (object sender, EventArgs e) {
            if (b.GetLastMouseLeftClick(out mClick)) {
                b.AddEllipse(mClick.X, mClick.Y, size, size, fill, 1, stroke);
            }          
            if (radioButton1.Checked) {
                fill = cCurrent;
            } else {
                stroke = cCurrent;
            }
        }
    }
}
