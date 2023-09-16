#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    
    try:
        if sys.argv[2] == 'react': # 인자값의 T/F 확인
            project_root = os.getcwd() # getcwd ==> get "Current Working Directory" 현재 작업 경로 얻는 명령어
            os.chdir(os.path.join(project_root, os.pardir, os.pardir, os.pardir, "FrontEnd/project"))# 상대경로(chdir)에 "project"디렉토리의 절대경로(path.join)를 붙여줌.
            # os.pardir은 현 경로의 상위 폴더를 나타냄.
            # 즉 여기서는 project_root의 경로+project 디렉토리의 절대경로가 된다.
            os.system("npm run build")
            os.chdir(project_root)
            sys.argv.pop(2)
    except IndexError:
        execute_from_command_line(sys.argv)
    else:             
        execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
