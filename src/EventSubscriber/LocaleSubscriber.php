<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class LocaleSubscriber implements EventSubscriberInterface
{
    // Langue par défaut
    private $defaultLocale;

    public function __construct($defaultLocale = 'en')
    {
        $this->defaultLocale = $defaultLocale;
    }

    public function onRequestEvent(RequestEvent $event)
    {
        $request = $event->getRequest();

        if (!$request->hasPreviousSession()) {
            return;
        }

        // On vérifie si la langue est passée en paramètre de l'URL
        if ($locale = $request->query->get('locale')) {
            $request->setLocale($locale);
        } else {
            // Sinon on utilise celle de la session
            $request->setLocale($request->getSession()->get('_locale', $this->defaultLocale));
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            RequestEvent::class => 'onRequestEvent',
        ];
    }
}
