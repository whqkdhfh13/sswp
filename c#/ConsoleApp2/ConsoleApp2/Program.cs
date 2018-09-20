using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using GDIDrawer;
using System.Threading;
using System.Diagnostics;


namespace ConsoleApp2 {

    class Program {

        static CDrawer dp = new CDrawer(800, 600);
        static int elapsedFrame = 0;
        static Point pCoord;
        static readonly int r = 50;
        static readonly double gravity = 0.2;
        static Point mClick;

        static void Main(string[] args) {
            int y = 400;
            double ySpeed = 10;
            bool swt = false;
            dp.ContinuousUpdate = false;
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            
            while (true) {
                // Variable Declaration
                Boolean b = dp.GetLastMousePosition(out pCoord);
                elapsedFrame++;

                // Logics
                if (dp.GetLastMouseLeftClick(out mClick)) {
                    if (pCoord.X > 700 && pCoord.Y < 100) break;
                    else swt = true;
                }
				
                if (y > 600 - r) {
                    ySpeed *= -0.8;
                    if (swt) ySpeed = -12;
                    swt = false;
                    y += (int)ySpeed;
                }

				if (400 > pCoord.X - 100 && 400 < pCoord.X + 100 && y + r > pCoord.Y - 10 && y + r < pCoord.Y + 60) {
					ySpeed = -5;
				} 

                // Graphics
                dp.AddRectangle(700, 0, 100, 100, Color.FromArgb(100, 255, 0, 0));
                dp.AddEllipse(400, (y += (int)Math.Round(ySpeed += gravity)) - r, 2* r, 2 * r, Color.FromArgb(255, 255, 0, 255));
                dp.AddRectangle(pCoord.X - 100, pCoord.Y - 10, 200, 20, Color.FromArgb(150, 0, 150, 150));
                if (stopwatch.ElapsedMilliseconds != 0) dp.AddText("FrameRate = " + 1000 * elapsedFrame / stopwatch.ElapsedMilliseconds + "\nySpeed = " +  Math.Round(ySpeed), 12, 0, 0, 500, 100, Color.FromArgb(255, 255, 255));

                // Rendering
                dp.Render();
                Thread.Sleep(7);
                dp.Clear();
                
            }
        }
    }
}
