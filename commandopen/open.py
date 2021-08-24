
import json, argparse, subprocess, os

PROGRAMS = "c:/pro/joe/commandopen/programs.json"

class ProgramOpener():
    
    def __init__(self, programs_dir):
        self.passed_pr_name = None 
        self.programs_dir   = programs_dir
    
    def open_msg(self, name):
        return f"=== opening {name} ==="

    def fail_msg(self, name):
        return f"Program \"{name}\" not recognized."

    def get_programs(self):
        with open(self.programs_dir) as ps:
            ps = json.loads(ps.read())
        return ps

    def cli(self):
        my_parser = argparse.ArgumentParser(prog= 'open',
                                        description= 'open a program from the command line',
                                        usage='%(prog)s program_name')

        my_parser.add_argument('program', action='store', type=str)
        
        self.passed_pr_name = vars(my_parser.parse_args())["program"]
    
    def run_cli(self):
        self.cli()
        return self.open()

    def open(self, process = None):

        my_programs = self.get_programs()
        if(process is None): process = self.passed_pr_name

        if(process in my_programs):

            data = my_programs[process].split('*')
            pr, msg = data[0], self.open_msg(data[1])

            ext = pr.split('.')[1]
            if(ext == 'lnk'): os.startfile(pr)
            else:             subprocess.Popen(pr)
            
            return msg
        
        else: return self.fail_msg(process)


if __name__ == "__main__":
    po = ProgramOpener(PROGRAMS)
    rs = po.run_cli()
    print(rs)