<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     * @param Request $request
     * @return Response
     */
    public function homepageAction(Request $request): Response
    {

        return $this->render('default/home.html.twig', [

        ]);
    }

    /**
     * @Route("/e-portfolio", name="eportfolio")
     * @param Request $request
     * @return Response
     */
    public function journeyAction(Request $request): Response
    {

        return $this->render('default/journey.html.twig', [
            "age" => date_diff(date_create('2001-09-21'), date_create())->format('%Y%')
        ]);
    }

    /**
     * @Route("/change-locale/{_locale}", name="change_locale", requirements={"_locale"="en|fr"}))
     *
     * @param Request $request
     *
     * @return Response
     */
    public function changeLocal(Request $request):Response
    {
        return $this->redirect($request->headers->get('referer'));
    }

}
