using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using GDIDrawer;
using System.Threading;

namespace ConsoleApp2
{
    class Program
    {
        static CDrawer dp = new CDrawer();
        static int a = 0;

        static void Main(string[] args) {

            while (true) {

                dp.AddEllipse(50 + a++, 50, 100, 100, Color.FromArgb(255, 255, 0, 255));
                Thread.Sleep(20);
                dp.Clear();
            }
        }
    }
}
