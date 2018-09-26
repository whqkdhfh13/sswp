using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using GDIDrawer;
using System.Threading;
using System.Diagnostics;
using System.IO;

namespace ConsoleApp2 {

    class Program {        
		static Ball bcBall = new Ball();
        
        static void Main(string[] args) {
            bcBall.run();

            int[][] ar = new int[2][];
            ar[0] = new int[] {1, 2, 3};
            ar[1] = new int[] {4, 5, 6, 7};
        }
    }

    class Ball {
        // Variable Declaration and initialization 
        CDrawer dp = new CDrawer(800, 600);
        Point pCoord;
        Point mClick;
        int elapsedFrame = 0;
        readonly int r = 50;
        readonly double gravity = 0.2;
        readonly Stopwatch stopwatch = new Stopwatch();
        int y = 400;
        double ySpeed = 10;
        bool swt = false;
        
        void initSettings () {
            dp.ContinuousUpdate = false;
            stopwatch.Start();
            Console.WriteLine("Test\nHi");
        }

		void rend () {
			// Graphics
			dp.AddRectangle(700, 0, 100, 100, Color.FromArgb(100, 255, 0, 0));
			dp.AddEllipse(400, ( y += (int)Math.Round(ySpeed += gravity) ) - r, 2 * r, 2 * r, Color.FromArgb(255, 255, 0, 255));
			dp.AddRectangle(pCoord.X - 100, pCoord.Y - 10, 200, 20, Color.FromArgb(150, 0, 150, 150));
			if (stopwatch.ElapsedMilliseconds != 0)
				dp.AddText(
                    "FrameRate = " + 1000 * elapsedFrame / stopwatch.ElapsedMilliseconds + "\nySpeed = " + Math.Round(ySpeed),
                    12, 0, 0, 500, 100, Color.FromArgb(255, 255, 255)
                );

			// Rendering
			dp.Render();
			Thread.Sleep(7);
			dp.Clear();
		}

        void ClearCurrentConsoleLine () {
            int currentLineCursor = Console.CursorTop;
            Console.SetCursorPosition(0, Console.CursorTop);
            Console.Write(new string(' ', Console.WindowWidth));
            Console.SetCursorPosition(0, currentLineCursor);
        }

        public void run () {
            // Initial settings
            initSettings();

			while (true) {
				// Variable Declaration
				bool b = dp.GetLastMousePosition(out pCoord);
				elapsedFrame++;

				// checking statements and logics
				if (dp.GetLastMouseLeftClick(out mClick)) {
					if (pCoord.X > 700 && pCoord.Y < 100) break;
					else swt = true;
				}

				if (y > 600 - r) {
					ySpeed *= -0.8;
                    ySpeed = (swt) ? -12 : ySpeed;
					swt = false;
					y += (int)ySpeed;
				}

				if (450 > pCoord.X - 100 && 450 < pCoord.X + 100 && y + r > pCoord.Y && y + r < pCoord.Y + 60) {
					y = pCoord.Y - 10 - r;
					ySpeed = -Math.Abs(ySpeed);
				}

                // Print current y value for debugging purpose
                Console.SetCursorPosition(0, Console.CursorTop - 2);
                ClearCurrentConsoleLine();
                ClearCurrentConsoleLine();
                Console.WriteLine("Current y = {0}\nCurrent ySpeed = {1}", y, ySpeed.ToString("0.##"));

                // Draw
                rend();                
            }
		}
	}
}
